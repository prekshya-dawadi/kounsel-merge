import Image from "next/image";
const CardData = (props) => {
    // let height = { "mix-height": "390px" };
    return (
        <div className="col-sm-12 col-md-12 col-lg-4 mb-4 main"><div className="card click-col">
            <div className="rounded-lg">
                <Image className="card-img-top" src={props.image} alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?" width={2000} height={2000} />
                <div className="d-flex flex-column">
                    <div className="card-body">
                        <h4 className="card-title mt-0"><div className="">{props.textInPic}</div></h4>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default CardData;