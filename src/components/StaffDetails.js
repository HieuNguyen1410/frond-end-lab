import React from "react";
import { Card, CardBody, CardTitle, CardImg ,Breadcrumb, BreadcrumbItem} from "reactstrap";
import dateFormat from "dateformat";
import {Link} from 'react-router-dom'

function RenderStaffDetails({ staffs }) {
  if (staffs != null) {
    return (
      <React.Fragment>
        <div className="col-lg-3 col-md-4 col-12">
            <CardImg
                width="100%"
                src={staffs.image} 
                alt={staffs.name}
                style={{ backgroundColor: "#333" }}
            />
        </div>
        <div className="col-lg-9 col-md-8 col-12">
              <h4>{"Họ và tên: " + staffs.name}</h4>
              <p>{`Ngày sinh: ${dateFormat(staffs.doB, "dd/mm/yyyy")}`}</p>
              <p>{`Ngày vào công ty: ${dateFormat(
                staffs.startDate,
                "dd/mm/yyyy"
              )}`}</p>
              <p>{`Phòng ban: ${staffs.department.name}`}</p>
              <p>{`Số ngày nghỉ còn lại: ${staffs.annualLeave}`}</p>
              <p>{`Số ngày đã làm thêm: ${staffs.overTime}`}</p>
        </div>
      </React.Fragment>
    );
  } else {
    return <div>loi</div>;
  }
}

function StaffDetails(props) {
  return (
    <div className="container main" >
      <div className="row">
        <div className="col-12">

          <p><Link to='/staff'>Nhân viên </Link> / {props.staffs.name}</p>
        </div>
      </div>
      <div className="row" style={{paddingBottom:20}}>
          <RenderStaffDetails staffs={props.staffs}/>
      </div>
    </div>
  );
}
export default StaffDetails;
