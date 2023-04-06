import { BrowserRouter as Router, Route } from 'react-router-dom';

const data = [
  { id: 1, title: 'Page 1', content: 'This is the content for page 1.' },
  { id: 2, title: 'Page 2', content: 'This is the content for page 2.' },
  { id: 3, title: 'Page 3', content: 'This is the content for page 3.' }
];

function Test() {
  return (
    <Router>
      {data.map(page => (
        <Route key={page.id} path={`/page/${page.id}`}>
          <Page title={page.title} content={page.content} />
        </Route>
      ))}
    </Router>
  );
}

function Page({ title, content }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Test;