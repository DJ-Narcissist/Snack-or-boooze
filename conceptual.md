### Conceptual Exercise

What is the purpose of the React Router? 
  To enable client-side routing in React apps, allowing for navigation and rendering of different components based on the URL without a full page reload.

What is a single page application?
 A web application that loads and renders a single HTML page dynamically, updating its content as the user interacts with the application without requiring a full page reload.

What are some differences between client side and server side routing? 
  Client side routing occurs within the user's browser and is managed by JS, this allows for faster transitions between pages as only the necessary components are loaded, while server side routing involves a full page reload for each request and generates a new HTML page to send to client.

What are two ways of handling redirects with React Router? When would you use each? 
  Using Route or useNavigate components from react-router-dom. I would use useNavigate when I want to send a user to a homepage if a specific route isn't defined is passed in the URL. I would use Route when there is a generic URL route that is isn't define to redirect to a homepage.

What are two different ways to handle page-not-found user experiences using React Router?
  Using Route component with a path='*' at the end of my route configurations to match any unmatched URLS and render a custom 404 page. Or I could use useNavigate to navigate to a custom 404 route for a more specific route or basic route that isn't matched.

How do you grab URL parameters from within a component using React Router? 
  By using useParams hook provided by the react-router-dom

What is context in React? When would you use it? 
  Context in React allows data to be shared between components without prop drilling. It is useful when multiple components in different parts of the component tree need access to the same data or state.

Describe some differences between class-based components and function components in React. 
  Class-based components extend the React.Component class. They hold state using this.state, and have lifecycle methods like componentDidMount. Function components, on the other hand, use the useState hook to manage state and can use other hooks like useEffect for handling side effects.

What are some of the problems that hooks were designed to solve?        
  Hooks in React solve class-based component issues: complex lifecycle  methods and scattered logic, as well as reusing stateful logic between components using patterns like HOCs and render props.