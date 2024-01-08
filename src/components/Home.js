import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {

  return (
    <Container>
      <Content>
        <Section 
            title="Model 3"
            description="สำหรับการส่งมอบทันที เข้าชม"
            descriptionline="สินค้าคงคลัง"
            backgroundImg="https://digitalassets-secure.tesla.com/image/upload/f_auto,q_auto/jgfs8nfkrvackmukef7s.jpg"
            backgroundVideo=""
            leftBtnText="สั่งทำพิเศษ"
            rightBtnText="เรียนรู้เพื่มเติม"
            overlay={false}
        />
      </Content>
      <Content>
        <Section 
            title="Model Y"
            description=""
            descriptionline=""
            backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop"
            backgroundVideo=""
            leftBtnText="สั่งทำพิเศษ"
            rightBtnText="เรียนรู้เพื่มเติม"
            overlay={false}
        />
      </Content>
      <Content>
        <Section 
            title="สัมผัสประสบการณ์ Tesla"
            description="กำหนดเวลาการทดลองวันนี้"
            descriptionline=""
            backgroundImg=""
            backgroundVideo="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4"
            leftBtnText="ทดลองขับ"
            rightBtnText=""
            overlay={true}
        />
      </Content>
      <Content>
        <Section 
            title="พลังงานแสงอาทิตย์ Powerwall"
            description="ให้พลังงานแก่ทุกอุปกรณ์"
            descriptionline=""
            backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Desktop_SolarPanels.jpg"
            backgroundVideo=""
            leftBtnText="เรียนรู้เพื่มเติม"
            rightBtnText=""
            overlay={false}
        />
      </Content>
      <Content>
        <Section 
            title="อุปกรณ์เสริม"
            description=""
            descriptionline=""
            backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg"
            backgroundVideo=""
            leftBtnText="เลือกซื้อเลย"
            rightBtnText=""
            overlay={false}
        />
      </Content>
    </Container>
  );
};

const Container = styled.div`

  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;

`

const Content = styled.div`

  scroll-snap-align: start;

`

export default Home