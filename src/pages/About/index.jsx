import React from 'react';
import { Col, Row } from 'antd';
import MemberCard from '../../components/common/MemberCard';

const About = () => {
  const members = [
    {
      fullname: 'Tran Phuc Thanh',
      id: '20194846',
      avatar:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-1/277772751_3148961952008488_5656921845953268639_n.jpg?stp=c0.23.291.291a_dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Jj2LDhD9ERQAX9ci9YK&_nc_ht=scontent.fhan2-1.fna&oh=00_AT-v0cIZrb0UBgaBNVEb8z6H_tQb8kj0du6oFnuEnb1YsA&oe=62E67CD1',
      role: 'Leader',
    },
    {
      fullname: 'Dinh Ngoc Khue',
      id: '20194782',
      avatar:
        'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/276138651_1622114288155443_6241154124303109845_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iMKEX3i1-68AX9dDrJG&_nc_oc=AQlqnHF4Gf3rLsZVca2uHMBjVvbqqenL60hGHTZLef0LRTB0PGe2r_g8IZoUWv_D03k&_nc_ht=scontent.fhan2-4.fna&oh=00_AT-pgpI-T95xgpEJXWLpRSEPGNkjSTpg7NIFEB8MPaczOQ&oe=62E4FB77',
      role: 'Member',
    },
    {
      fullname: 'Le Dinh Huy',
      id: '20194776',
      avatar:
        'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/279490615_2545533552454022_3826045821054812564_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tXue042ItuoAX_nehKt&_nc_ht=scontent.fhan2-3.fna&oh=00_AT_v34spUv4duVfeNzDHbuB-TbCAFf2Yc30xklDuHmwmiA&oe=62E63F08',
      role: 'Member',
    },
    {
      fullname: 'Mai Anh Duc',
      id: '20194740',
      avatar:
        'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/289558738_163705479492730_7524017620495788699_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VhzXHNfES4cAX_e9G5y&_nc_oc=AQnt9fcdf3jS-qWiYpWrxyLh8-KAQcR7fxak2bN5f_BzQwAmlRmDJxj1qrZW9VKkylw&_nc_ht=scontent.fhan2-3.fna&oh=00_AT-XPjKaS7o02dL7rB-WXaMF1SkUo74WLEtAIjA-R2Szuw&oe=62E5AF2D',
      role: 'Member',
    },
  ];
  return (
    <div>
      <Row>
        {members.map((member) => (
          <Col xl={12} span={24}>
            <MemberCard
              name={member.fullname}
              id={member.id}
              src={member.avatar}
              role={member.role}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default About;
