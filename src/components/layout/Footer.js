import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
                {/* <!-- Footer --> */}
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; Your Website 2020</span>
                        </div>
                    </div>
                </footer>
                {/* <!-- End of Footer --> */}
            </>
        )
    }
}