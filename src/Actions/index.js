const INCREMENT_COUNTER = 'increase';

function increment(payload) {
  return {
    type: payload
  };
}

function incrementAsync(payload) {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(payload);
    }, 1000);
  };
}

export default {
    sync: increment,
    async: incrementAsync
}
