import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { dropTask } from 'ember-concurrency';
import fetch from 'fetch';

export default class IndexController extends Controller {
  @service('file-queue') fileQueueService;

  @tracked rdfData = '';
  queueName = 'rdf-data';

  get hasData() {
    return this.rdfData.trim() !== '';
  }

  get shouldDisableSubmit() {
    return !this.hasData || this.submitForValidation.isRunning;
  }

  @action
  async handleFileSelection(file) {
    let content = await file.readAsText();
    this.rdfData = content;

    // Remove the file from the queue since we don't want to actually upload it
    let fileQueue = this.fileQueueService.find(this.queueName);
    fileQueue.remove(file);
  }

  @dropTask
  *submitForValidation(event) {
    event.preventDefault();

    const response = yield fetch('/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/turtle',
      },
      body: this.rdfData,
    });

    const { id: validationReportId } = yield response.json();
    this.transitionToRoute('validation-reports.details', validationReportId);
  }

  @action
  updateRdfData(event) {
    this.rdfData = event.target.value;
  }

  reset() {
    this.rdfData = '';
  }
}
