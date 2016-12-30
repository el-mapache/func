import React from 'react';

const Loading = Composed => ({isLoading, ...props}) => {
  return (
    <Composed {...props}>
      {isLoading ? 'Loading' : props.children}
    </Composed>
  );

}

export default Loading;
