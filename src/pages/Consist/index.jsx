import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Typography, Button, Modal, Row, Col, Table, Form, Input } from 'antd';
import React, { useState } from 'react';
import classes from './styles.module.scss';
import { ToastContainer, toast } from 'react-toastify';

const { Title } = Typography;

const Made = () => {
  const [dataSource, setDataSource] = useState([
    {
      consistid: 'CON2',
      orderid: 'ORD2019',
      productid: 'PRO2019',
      quantity: 3,
    },
    {
      consistid: 'CON92',
      orderid: 'ORD2019',
      productid: 'PRO2019',
      quantity: 3,
    },
    {
      consistid: 'CON62',
      orderid: 'ORD2019',
      productid: 'PRO2019',
      quantity: 3,
    },
    {
      consistid: 'CON24',
      orderid: 'ORD2019',
      productid: 'PRO2019',
      quantity: 3,
    },
    {
      consistid: 'CON22',
      orderid: 'ORD2019',
      productid: 'PRO2019',
      quantity: 3,
    },
  ]);

  const onDelete = (record) => {
    setDataSource((pre) => {
      return pre.filter((item) => item.consistid !== record.consistid);
    });
    toast.success(`${record.consistid} deleted!`);
  };

  const columns = [
    {
      key: '1',
      title: 'ConsistID',
      dataIndex: 'consistid',
    },
    {
      key: '2',
      title: 'OrderID',
      dataIndex: 'orderid',
    },
    {
      key: '3',
      title: 'ProductID',
      dataIndex: 'productid',
    },
    {
      key: '4',
      title: 'Quantity (No)',
      dataIndex: 'quantity',
    },
    {
      key: '5',
      title: 'Actions',
      render: (record) => {
        return (
          <>
            <EditOutlined style={{ cursor: 'pointer' }} />
            <DeleteOutlined
              onClick={() => onDelete(record)}
              style={{ color: 'red', marginLeft: '12px', cursor: 'pointer' }}
            />
          </>
        );
      },
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    setDataSource((prev) => {
      return [
        ...prev,
        {
          consistid: values.consistid,
          orderid: values.orderid,
          productid: values.productid,
          quantity: values.quantity,
        },
      ];
    });
    form.resetFields();
    setIsModalVisible(false);
    toast.success('New Order Recipe Added Successfully!');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Row className={classes.top}>
        <Col xs={24} md={8}>
          <Title level={3}>Made</Title>
        </Col>
        <Col xs={24} md={8} offset={8} className={classes.add}>
          <Button icon={<PlusOutlined />} onClick={showModal}>
            Add New Order Recipe
          </Button>
          <Modal
            title="Add New Order Recipe"
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={false}
          >
            <Form
              form={form}
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="ConsistID"
                name="consistid"
                rules={[
                  {
                    required: true,
                    message: 'Please input ID of new order recipe!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="ProductID"
                name="productid"
                rules={[
                  {
                    required: true,
                    message: 'Please input ID of product!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="OrderID"
                name="orderid"
                rules={[
                  {
                    required: true,
                    message: 'Please input ID of order!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Quantity (g)" name="quantity">
                <Input />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </Col>
      </Row>
      <Table
        pagination={{
          position: ['bottomCenter', 'bottomCenter'],
        }}
        bordered
        columns={columns}
        dataSource={dataSource}
      ></Table>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
};

export default Made;