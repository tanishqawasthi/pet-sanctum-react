let Filters = (props) => {

    return (
        <div>
            <div className="d-flex flex-wrap justify-content-center mt-3">
                <button type="button" className="btn m-2 text-dark filter-btn" id="all" onClick={props.onChangeFilter}>
                    All
                </button>
                <button type="button" className="btn m-2 text-dark filter-btn" id="dog" onClick={props.onChangeFilter}>
                    Dogs
                </button>
                <button type="button" className="btn m-2 text-dark filter-btn" id="cat" onClick={props.onChangeFilter}>
                    Cat
                </button>
                <button type="button" className="btn m-2 text-dark filter-btn" id="fish" onClick={props.onChangeFilter}>
                    Fish
                </button>
                <button type="button" className="btn m-2 text-dark filter-btn" id="other" onClick={props.onChangeFilter}>
                    Other
                </button>
            </div>
        </div>
    )

};

export default Filters;