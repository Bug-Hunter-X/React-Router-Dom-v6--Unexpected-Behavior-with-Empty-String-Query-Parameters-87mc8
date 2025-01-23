The issue can be resolved by explicitly handling empty string query parameters within the component that receives the query parameters. For instance, you can check if the parameter exists and is an empty string, handling this case appropriately.  Alternatively, you might modify your navigation logic to avoid passing empty string query parameters unless specifically needed.

```jsx
import { useSearchParams } from 'react-router-dom';

function MyComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q');

  // Handle empty string query parameter
  const query = q === '' ? undefined : q; // or handle it differently

  return (
    <div>
      <h1>Search Results</h1>
      {query ? <p>Query: {query}</p> : <p>No query provided</p>}
    </div>
  );
}
```
This approach ensures that even an empty string is treated as a valid, recognized query parameter value, preventing unexpected behavior.