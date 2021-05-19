import React, { useState, useContext } from 'react';
import { List } from 'antd';
import { useHistory } from 'react-router-dom';

// import { UserContext } from 'contexts/User';
// import Submitter from 'components/shared/Submitter';


const PriceTableItem = ({ data }) => {
  const history = useHistory();
  const gotoDetail = () => {
    history.push("/detail/"+data.id)
  }
  return (
  <div className="PriceTableItem" onClick={() => gotoDetail()}>
    <div className="PriceTableItem__Inner">    
      <div>
        <p>ID {data.id} • {data.timestamp}</p>
        <h4>{data.name}</h4>
      </div>
      <div className="flexer"></div>
      <h2>{data.value}</h2>
    </div>
    <div className="PriceTableItem__Stripe"></div>
  </div>
  )
};


const PricesTable = ({ data }) => {

  // const [currentUser,] = useContext(UserContext);
  // const [error, setError] = useState();
  // const [processing, setProcessing] = useState();
  // const [currentTx, setCurrentTx] = useState();
  // const [modal, setModal] = useState({ visible: false });
  // const [tip, setTip] = useState("0");

  return (
    <>
    {data?
      <List
      className="Prices" 
      itemLayout="horizontal"
      dataSource={data}
      pagination={{ pageSize: 10, showSizeChanger: false }}
      renderItem={item => (
        <PriceTableItem data={item} />
      )}/>
    : null }
    </>
  );
};

export default PricesTable;
