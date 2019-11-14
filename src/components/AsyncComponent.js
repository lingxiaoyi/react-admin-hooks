// import React, { useState, useEffect } from 'react';
// import { useAuthStore } from '@/hooks/useAuth';

// export default (loadComponent, notRequireAuth) => props => {
//   const [Component, setComponent] = useState(null);
//   const [state, dispatch] = useAuthStore();

//   useEffect(() => {
//     loadComponent()
//       .then(module => module.default)
//       .then(C => {
//         setComponent(C)
//         // let { user } = state;
//         // if(!notRequireAuth && !user.token) {
//         //   dispatch({type: 'logout'})
//         // }
//       })
//       .catch((err) => {
//         console.error('Cannot load component in <AsyncComponent />')
//         throw err
//       })
//   }, [Component])

//   return Component ? <Component {...props} /> : null;
// }


import React, { Component } from 'react';
import { globalStore } from '@/hooks/useAuth';

export default (loadComponent, notRequireAuth, user) => (
  class extends Component {
    state = {
      Component: null
    }

    componentWillMount() {
      if (this.hasLoadedComponent()) {
        return
      }

      loadComponent()
        .then(module => module.default)
        .then((Component) => {
          this.setState({ Component })
          let { history, user } = globalStore;
          if(!notRequireAuth && !user.token) {
            history.push('/login');
          }
        })
        .catch((err) => {
          console.error('Cannot load component in <AsyncComponent />')
          throw err
        })
    }

    hasLoadedComponent() {
      return this.state.Component !== null
    }

    render() {
      const { Component } = this.state
      return (Component) ? <Component {...this.props} />: null
    }
  }
)