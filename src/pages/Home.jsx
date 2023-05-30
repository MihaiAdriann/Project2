import React from 'react';
import Layout from '../components/Layout';
import HomeCategory from '../components/HomeCategory' ;
import products from '../utils/products.json';


class Home extends React.Component{
  constructor() {
      super();
      this.state = {
          categories: [] ,
          categoryNames: [] ,
      }
  }

  componentDidMount() {
      const categories = Object.keys(products);
      const categoryNames = Object.keys(products)
      this.setState({categories , categoryNames});
  }

  render() {
      return(
          <Layout>
              <div className="container-fluid container-min-max-width">
                  <div className="row">
                      {this.state.categories.map((category, index) =>
                          <HomeCategory
                              key={index}
                              route={category}
                              name={products[category].name}
                              description={products[category].description}
                              image={products[category].image}
                              routeName={this.state.categoryNames[index]}
                          />
                      )}
                  </div>
              </div>
          </Layout>
      );
  }
}

export default Home;