import React from 'react';

const transform = transformFn => {
  return {
    of(Composed) {
      return class Connector extends React.Component {
        constructor(props) {
          super(props);
        }

        render() {
          // store original props in one object, then xformed props in another,
          // then merge them both?
          return (
            <Composed {...transformFn(this.props)} />
          );
        }
      };
    }
  };
};

export default transform;
