import React from 'react'
import {Modal} from 'rsuite'
import ShowInfoDesktop from "../ShowInfo/ShowInfoDesktop"
export default function MutualFriends(props) {
    const {show,setShow,data}=props
    return (
        <div className="Mutual-Friends">
            <Modal show={show} onHide={()=>setShow(false)} size="xs" >
                <Modal.Header>
                    <Modal.Title>Mutual Friends</Modal.Title>
                </Modal.Header>
                    <ShowInfoDesktop data={data} />
            </Modal>
        </div>
    )
}
