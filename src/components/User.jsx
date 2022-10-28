import React from "react";

function User() {
  const [user, setUser] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    setIsLoading(true);
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then(
        (response) => setUser(response.results),
        setIsLoading(false),
        console.log(user)
      );
  }, []);

  if (isLoading) {
    return <h1 className="loading">Loading!!!</h1>;
  }

  const numPerPage = 5;
  const total = user.length;
  const pages = Math.ceil(total / numPerPage);
  const skip = page * numPerPage - numPerPage;

  return (
    <div className="content">
      {user.slice(skip, skip + numPerPage).map((each) => {
        const { name, phone, dob, login } = each;
        return (
          <div className="user">
            <h1>{name.first}</h1>
            <h2>{name.last}</h2>
            <h2>{phone}</h2>
          </div>
        );
      })}
      {
        <button
          className="prev"
          onClick={() => {
            setPage((prev) => prev - 1);
          }}
          disabled={page <= 1}
          arial-disabled={page <= 1}
        >
          Prev
        </button>
      }
      {Array.from({ length: pages }, (value, index) => index + 1).map(
        (each) => (
          <button className="btn1" onClick={() => setPage(each)}>
            {each}{" "}
          </button>
        )
      )}
      {
        <button
          className="next"
          onClick={() => {
            setPage((next) => next + 1);
          }}
          disabled={page >= pages}
          arial-disabled={page >= pages}
        >
          Next
        </button>
      }
    </div>
  );
}

export default User;
