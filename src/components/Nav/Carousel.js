import React from 'react';
import './Carousel.scss';

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      currIndex: 0,
    };
  }

  onChangeImage = index => {
    if (index === this.props.images.length - 2) {
      index = 0;
    } else if (index < 0) {
      index = this.props.images.length - 3;
    }
    this.setState({ currIndex: index });

    if (index === 4) {
      this.setState({});
    }
  };

  render() {
    const { currIndex } = this.state;
    const { images } = this.props;
    let newArr = images.slice(0, images.length - 2);
    return (
      <>
        <div className="MainCarouselWapper">
          <div
            className="slideContainer"
            style={{
              width: `${images.length * 33}vw`,
              transform: `translateX(${currIndex * -33}vw)`,
            }}
          >
            {images.map(({ id, url }) => {
              return (
                <div className="slideBox" key={id}>
                  <div
                    className="img"
                    style={{
                      background: `url(${url}) no-repeat center`,
                      backgroundSize: 'contain',
                    }}
                  />
                </div>
              );
            })}
          </div>

          <ul className="dots">
            {newArr.map(({ id }) => {
              return (
                <li key={id}>
                  <button
                    className={`${currIndex === id ? 'btnActive' : ''}`}
                    onClick={() => this.onChangeImage(id)}
                  >
                    {id}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="slideBtn">
            <button
              className="prevBtn"
              onClick={() => {
                this.onChangeImage(currIndex - 1);
              }}
            >
              <span>
                <i className="fas fa-chevron-left" />
              </span>
            </button>
            <button
              className="nextBtn"
              onClick={() => {
                this.onChangeImage(currIndex + 1);
              }}
            >
              <span>
                <i className="fas fa-chevron-right" />
              </span>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Carousel;
