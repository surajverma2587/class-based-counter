export const Counter = () => {
  return (
    <section className="border m-2">
      <h2 className="text-center p-4">Counter: 0</h2>

      <div className="d-flex justify-content-around mb-4">
        <button className="btn btn-danger">Decrement</button>
        <button className="btn btn-warning">Reset</button>
        <button className="btn btn-success">Increment</button>
      </div>
    </section>
  );
};
