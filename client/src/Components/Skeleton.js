import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const Skeletons = () => {
    return (
        <div className="container">
            <div className="row">

                <div className="col-md-4">
                    <div className="card-md" style={{ height: "500px !important", marginBottom: "20px" }}>
                        <SkeletonTheme color="#ddd" highlightColor="#f2f2f2">

                            <div>
                                <Skeleton style={{marginBottom:"10px"}} height={200} width={300} />
                            </div>
                        </SkeletonTheme>

                        <div >

                            <SkeletonTheme color="#ddd" highlightColor="#f2f2f2">

                                <div>
                                    <Skeleton height={13} width={300}  style={{marginBottom:"10px"}} />
                                </div>
                            </SkeletonTheme>
                        </div>

                        <SkeletonTheme color="#ddd" highlightColor="#f2f2f2">

                            <div>
                            <Skeleton height={13} width={300}  style={{marginBottom:"10px"}} />
                            </div>
                        </SkeletonTheme>

                        <SkeletonTheme color="#ddd" highlightColor="#f2f2f2">

                            <div>
                            <Skeleton height={13} width={200}  style={{marginBottom:"10px"}} />
                            </div>
                        </SkeletonTheme>

                        <SkeletonTheme color="#ddd" highlightColor="#f2f2f2">

                            <div>
                            
                        <a  style={{ fontSize: "16px", cursor: "pointer" }}><Skeleton height={23} width={300} /></a>
                            </div>
                        </SkeletonTheme>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skeletons
