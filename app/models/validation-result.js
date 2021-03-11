import Model from '@ember-data/model';
import { attr, hasMany, belongsTo } from '@ember-data/model';

export default class ValidationResultModel extends Model {
  @attr focusNode;
  @attr resultMessage;
  @attr resultPath;
  @attr sourceConstraint;
  @attr value;
  @hasMany('validation-result', { inverse: null }) details;
  @belongsTo('severity') resultSeverity;
  @belongsTo('shape') sourceShape;
  @belongsTo('constraint-component') sourceConstraintComponent;

  get transformResultMessage() {
    if (this.resultMessage.includes('Closed')) {
      return 'Property not defined';
    } else if (this.resultMessage.includes('ClassConstraint')) {
      return 'Class not defined';
    }
    return this.resultMessage;
  }
}
