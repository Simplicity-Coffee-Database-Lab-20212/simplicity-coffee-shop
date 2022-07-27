import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Typography,
  Button,
  Modal,
  Row,
  Col,
  Table,
  Form,
  Input,
  DatePicker,
} from 'antd';
import React, { useState } from 'react';
import classes from './styles.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';

const { Title } = Typography;

const Ingredient = () => {
  const [dataSource, setDataSource] = useState([
    {
      ingredientid: 'ING2019',
      name: 'Pepper',
      price: 12,
      quantity: 2,
      expire: `${moment().format('YYYY-MM-DD')}`,
    },
    {
      ingredientid: 'ING2018',
      name: 'Pepper',
      price: 12,
      quantity: 2,
      expire: `${moment().format('YYYY-MM-DD')}`,
    },
    {
      ingredientid: 'ING2017',
      name: 'Pepper',
      price: 12,
      quantity: 2,
      expire: `${moment().format('YYYY-MM-DD')}`,
    },
    {
      ingredientid: 'ING2016',
      name: 'Pepper',
      price: 12,
      quantity: 2,
      expire: `${moment().format('YYYY-MM-DD')}`,
    },
    {
      ingredientid: 'ING2015',
      name: 'Pepper',
      price: 12,
      quantity: 2,
      expire: `${moment().format('YYYY-MM-DD')}`,
    },
    {
      ingredientid: 'ING2014',
      name: 'Pepper',
      price: 12,
      quantity: 2,
      expire: `${new Date()}`,
    },
  ]);

  const onDelete = (record) => {
    setDataSource((pre) => {
      return pre.filter((item) => item.ingredientid !== record.ingredientid);
    });
    toast.success(`${record.ingredientid} deleted!`);
  };

  const columns = [
    {
      key: '1',
      title: 'IngredientID',
      dataIndex: 'ingredientid',
    },
    {
      key: '2',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: '3',
      title: 'Price',
      dataIndex: 'price',
    },
    {
      key: '4',
      title: 'Quantity In Stock',
      dataIndex: 'quantity',
    },
    {
      key: '5',
      title: 'Expire Date',
      dataIndex: 'expire',
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
    console.log(values.expire);
    setDataSource((prev) => {
      return [
        ...prev,
        {
          ingredientid: values.ingredientid,
          name: values.name,
          price: values.price,
          quantity: values.quantity,
          expire: values.expire.toString(),
        },
      ];
    });
    form.resetFields();
    setIsModalVisible(false);
    toast.success('Ingredient Added Successfully!');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Row className={classes.top}>
        <Col xs={24} md={8}>
          <Title level={3}>Ingredient</Title>
        </Col>
        <Col xs={24} md={8} offset={8} className={classes.add}>
          <Button icon={<PlusOutlined />} onClick={showModal}>
            Add New Ingredient
          </Button>
          <Modal
            title="Add New Ingredient"
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
                label="IngredientID"
                name="ingredientid"
                rules={[
                  {
                    required: true,
                    message: 'Please input ID of ingredient!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Name" name="name">
                <Input />
              </Form.Item>

              <Form.Item label="Price" name="price">
                <Input />
              </Form.Item>
              <Form.Item label="Quantity In Stock" name="quantity">
                <Input />
              </Form.Item>
              <Form.Item label="Expire Date" name="expire">
                <DatePicker />
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

export default Ingredient;
