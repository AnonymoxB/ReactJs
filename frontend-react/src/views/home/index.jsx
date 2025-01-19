// Import Link dari react-router-dom
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="vh-100 w-100 d-flex justify-content-center align-items-center bg-light">
            <div className="p-5 rounded-3 shadow-sm text-center bg-white w-100 mx-3">
                <h1 className="display-5 fw-bold">FULLSTACK JAVASCRIPT DEVELOPER</h1>
                <p className="col-md-12 fs-4">
                    Belajar Full Stack JavaScript Developer dengan Express dan React di SantriKoding.com
                </p>
                <hr />
                <Link to="/register" className="btn btn-primary btn-lg me-3">REGISTER</Link>
                <Link to="/login" className="btn btn-secondary btn-lg">LOGIN</Link>
            </div>
        </div>
    );
}
