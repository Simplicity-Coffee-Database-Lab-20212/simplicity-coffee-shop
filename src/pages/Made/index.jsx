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

const { Title } = Typography;

const Made = () => {
  const [dataSource, setDataSource] = useState([
    {
      madeid: 'MAD2',
      productid: 'PRO2019',
      ingredientid: 'ING2013',
      quantity: 12.3,
    },
    {
      madeid: 'MAD211',
      productid: 'PRO2019',
      ingredientid: 'ING2013',
      quantity: 12.3,
    },
    {
      madeid: 'MAD22',
      productid: 'PRO2019',
      ingredientid: 'ING2013',
      quantity: 12.3,
    },
    {
      madeid: 'MAD28',
      productid: 'PRO2019',
      ingredientid: 'ING2013',
      quantity: 12.3,
    },
    {
      madeid: 'MAD29',
      productid: 'PRO2019',
      ingredientid: 'ING2013',
      quantity: 12.3,
    },
    {
      madeid: 'MAD112',
      productid: 'PRO2019',
      ingredientid: 'ING2013',
      quantity: 12.3,
    },
  ]);

  const onDelete = (record) => {
    setDataSource((pre) => {
      return pre.filter((item) => item.madeid !== record.madeid);
    });
    toast.success(`${record.madeid} deleted!`);
  };

  const columns = [
    {
      key: '1',
      title: 'MadeID',
      dataIndex: 'madeid',
    },
    {
      key: '2',
      title: 'IngredientID',
      dataIndex: 'ingredientid',
    },
    {
      key: '3',
      title: 'ProductID',
      dataIndex: 'productid',
    },
    {
      key: '4',
      title: 'Quantity (g)',
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
          madeid: values.madeid,
          productid: values.productid,
          ingredientid: values.ingredientid,
          quantity: values.quantity,
        },
      ];
    });
    form.resetFields();
    setIsModalVisible(false);
    toast.success('New Recipe Added Successfully!');
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
            Add New Recipe
          </Button>
          <Modal
            title="Add New Recipe"
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
                label="MadeID"
                name="madeid"
                rules={[
                  {
                    required: true,
                    message: 'Please input ID of new recipe!',
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