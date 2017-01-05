const nullAction = action => () => ({
  type: action,
  data: null
});


export default nullAction;
