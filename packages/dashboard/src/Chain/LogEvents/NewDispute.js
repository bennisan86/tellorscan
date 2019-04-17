import BaseEvent from './BaseEvent';

export default class NewDispute extends BaseEvent {
  constructor(props) {
    super(props);
    [
      'normalize'
    ].forEach(fn=>this[fn]=this[fn].bind(this));

    const {_disputeId, _requestId, _timestamp, _challengeHash, _disputeHash, _miner} = props.returnValues;
    this._timestamp = this._asNum(_timestamp);
    this._requestId = this._asNum(_requestId);
    this._disputeId = this._asNum(_disputeId);
    this._disputeHash = _disputeHash;
    this._challengeHash = _challengeHash;
    this._miner = _miner;
  }

  normalize() {
    let parent = super.normalize();
    let normalized = {
      ...parent,
      id: this._disputeId,
      requestId: this._apiId,
      miningTime: this._timestamp,
      challengeHash: this._challengeHash,
      disputeHash: this._disputeHash,
      miner: this._miner,
      normalize: () => normalized
    }

    return normalized;
  }

  toJSON() {
    let parent = super.toJSON();
    return {
      ...parent,
      id: this._disputeId,
      requestId: this._requestId,
      miningTime: this._timestamp,
      challengeHash: this._challengeHash,
      disputeHash: this._disputeHash,
      miner: this._miner
    }
  }
}
