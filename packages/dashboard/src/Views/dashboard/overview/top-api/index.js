import {connect} from 'react-redux';
import Top from './TopApi';

const s2p = state => {
  let top = state.analytics.topRequest.top || {};

  let req = state.events.tree.byId[top.id] || {};
  let loading = state.events.tree.loading ||
                state.analytics.topRequest.loading;
  return {
    loading,
    topCount: top.count || 0,
    topId: (top.id || ""),
    topSymbol: (req.symbol || "")
  }
}

const d2p = dispatch => {
  return {

  }
}

export default connect(s2p, d2p)(Top);
