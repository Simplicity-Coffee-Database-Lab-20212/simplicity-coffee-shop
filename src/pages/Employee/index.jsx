import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Typography, Button, Modal, Row, Col, Table, Form, Input } from 'antd';
import React, { useState } from 'react';
import classes from './styles.module.scss';
import { ToastContainer, toast } from 'react-toastify';

const { Title } = Typography;

const Employee = () => {
  const [dataSource, setDataSource] = useState([
    {
      employeeid: 'EMP2019',
      name: 'Trần Phúc Thành',
      phonenumber: '0918322965',
      gender: 'Male',
      position: 'Sale',
    },
    {
      employeeid: 'EMP2018',
      name: 'Trần Phúc Thành',
      phonenumber: '0918322965',
      gender: 'Male',
      position: 'Sale',
    },
    {
      employeeid: 'EMP2017',
      name: 'Trần Phúc Thành',
      phonenumber: '0918322965',
      gender: 'Male',
      position: 'Sale',
    },
    {
      employeeid: 'EMP2016',
      name: 'Trần Phúc Thành',
      phonenumber: '0918322965',
      gender: 'Male',
      position: 'Sale',
    },
    {
      employeeid: 'EMP2015',
      name: 'Trần Phúc Thành',
      phonenumber: '0918322965',
      gender: 'Male',
      position: 'Sale',
    },
    {
      employeeid: 'EMP2015',
      name: 'Trần Phúc Thành',
      phonenumber: '0918322965',
      gender: 'Male',
      position: 'Sale',
    },
  ]);

  const onDelete = (record) => {
    setDataSource((pre) => {
      return pre.filter((item) => item.employeeid !== record.employeeid);
    });
    toast.success(`${record.employeeid} deleted!`);
  };

  const columns = [
    {
      key: '1',
      title: 'EmployeeID',
      dataIndex: 'employeeid',
    },
    {
      key: '2',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: '3',
      title: 'Phone Number',
      dataIndex: 'phonenumber',
    },
    {
      key: '4',
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      key: '5',
      title: 'Position',
      dataIndex: 'position',
    },
    {
      key: '6',
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
          employeeid: values.employeeid,
          name: values.name,
          phonenumber: values.phonenumber,
          gender: values.gender,
          position: values.position,
        },
      ];
    });
    form.resetFields();
    setIsModalVisible(false);
    toast.success('Employee Added Successfully!');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Row className={classes.top}>
        <Col xs={24} md={8}>
          <Title level={3}>Employee</Title>
        </Col>
        <Col xs={24} md={8} offset={8} className={classes.add}>
          <Button icon={<PlusOutlined />} onClick={showModal}>
            Add New Employee
          </Button>
          <Modal
            title="Add New Employee"
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
                label="EmployeeID"
                name="employeeid"
                rules={[
                  {
                    required: true,
                    message: 'Please input ID of employee!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Name" name="name">
                <Input />
              </Form.Item>

              <Form.Item label="Phone Number" name="phonenumber">
                <Input />
              </Form.Item>

              <Form.Item label="Gender" name="gender">
                <Input />
              </Form.Item>

              <Form.Item label="Position" name="position">
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

export default Employee;
