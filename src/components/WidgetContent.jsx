import { useState, useEffect } from "react";

function WidgetContent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data.slice(0, 5))); // Get 5 sample posts
  }, []);

  return (
    <div style={{ padding: 10, background: "#f0f0f0", borderRadius: 5 }}>
      <h3>WidgetContent Data</h3>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetContent;
