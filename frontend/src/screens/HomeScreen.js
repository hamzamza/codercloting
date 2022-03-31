import data from '../data';
function HomeScreen() {
  return (
    <div>
      <h1>Featured procucts</h1>
      <div className="row justifay-content-center">
        {data.products.map((pd) => (
          <div className="col-12 col-sm-6 col-md-4  col-lg-3  p-2">
            <div key={pd.slug} className="card">
              <img src={pd.image} className={'card-image'}></img>
              <div className="card-body">
                <p>{pd.name}</p>
                <p>{pd.price}</p>

                <a
                  className={'btn btnylow btn-warning  ps-4 pe-4 '}
                  href={`/product/${pd.slug}`}
                >
                  Add
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
