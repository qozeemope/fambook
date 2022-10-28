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
      <h1>User Cards</h1>
      {user.slice(skip, skip + numPerPage).map((each) => {
        const { name, phone, dob, picture } = each;
        return (
          <div className="user-grid">
            <div className="user">
              <img
                src={picture.large}
                alt="image of a human"
                width="150px"
                className="user-image"
              />
              <h3 className="user-details">
                Name: {name.first} {""}
                {name.last}
              </h3>
              <p className="phone">Phone: {phone}</p>
            </div>
          </div>
        );
      })}

      <div className="buttons">
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
    </div>
  );
}

export default User;
