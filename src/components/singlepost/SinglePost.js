import "./singlePost.css"

function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src="https://miro.medium.com/max/1400/1*MmnkX6j_AlB8t-bI4julcw.png"
                    alt=""
                />
                <h1 className="singlePostTitle">
                    A Thorough Introduction To ARIMA Models
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span>1 day ago</span>
                </div>

                <p className="singlePostDesc">
                    ARIMA models and its variants are some of the most established models for time series forecasting. This article will be a somewhat thorough introduction to ARIMA/ARMA modelling, as well as the math behind how they work.

                    ARIMA MODELLING
                    The ARIMA (Auto Regressive Moving Average) model is a very common time series-forecasting model. It is a more sophisticated extension of the simpler ARMA (Auto Regressive Moving Average) model, which in itself is just a merger of two even simpler components:

                    AR (Auto Regressive): models attempt to predict future values based on past values. AR models require the time series to be stationary.
                    MA (Moving Average): models attempt to predict future values based on past forecasting errors. MA models assume that an autoregressive model can approximate the given series. This is not to be confused with moving average, which is a smoothing process rather than a forecasting model.
                    <br />
                    <br />
                    ARIMA MODEL
                    The ARIMA (Auto Regressive Integrated Moving Average) model is an extension of the ARMA model, with the addition of an integration component.

                    ARMA models must work on stationary time series. A stationary time series is a series that’s statistical properties, such as mean and variance, do not change over time. Unfortunately, majority of real world time series are not stationary, and thus they must often be transformed in order to make them stationary. The process of transformation is referred to as integration.
                </p>
            </div>
        </div>
    )
}

export default SinglePost