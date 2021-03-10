import Model from '@ember-data/model';
import { attr, hasMany } from '@ember-data/model';

export default class ValidationReportModel extends Model {
  @attr conforms;
  @attr shapesGraphWellFormed;
  @hasMany('validation-result') results;
}
