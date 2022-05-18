import {STAFFS} from '../shared/staffs';
import React, {Component} from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { useState } from 'react';
import dateFormat from 'dateformat';

const ListUser = function (){
    const [user,setUser] = useState()

    const handleClick = (index) =>{
        const result = STAFFS[index];
        console.log(result);
        setUser(() =>(
            <div className="col-lg-6 col-md-6 col-12">
                <Card>
                    <CardBody>
                    <h4>{'Họ và tên: '+ result.name}</h4>
                    <p>{`Ngày sinh: ${dateFormat(result.doB,"dd/mm/yyyy")}`}</p>
                    <p>{`Ngày vào công ty: ${dateFormat(result.startDate,"dd/mm/yyyy")}`}</p>
                    <p>{`Phòng ban: ${result.department.name}`}</p>
                    <p>{`Số ngày nghỉ còn lại: ${result.annualLeave}`}</p>
                    <p>{`Số ngày đã làm thêm: ${result.overTime}`}</p>
                    </CardBody>
                </Card>
            </div>
        ))
    }



    const Staffs = STAFFS.map((value,index) => (
        <div className="col-lg-4 col-md-6 col-12" key={index} style={{paddingBottom: '10px'}}>
            <Card onClick={() => handleClick(index)}>
                <CardBody>
                    <CardTitle>{value.name}</CardTitle>
                </CardBody>
            </Card>
        </div>
    ))
    return (
        <div className="container" style={{padding:15}}>
        <div className="row">
            {Staffs}
        </div>
        <div className="row">
            {user || 'Vui lòng bấm vào tên để xem thông tin'}
        </div>
      </div>
    )
}

export default ListUser