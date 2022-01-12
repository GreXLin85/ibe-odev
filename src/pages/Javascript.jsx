import React from 'react';
import {Flex, Spacer, Text} from "@chakra-ui/react";
import ImageComponent from "../components/ImageComponent";
import javascriptslayt from "../assets/javascriptslayt.gif";

const Javascript = (props) => (
    <Flex flexDirection={"column"} mb={5}  w={"2xl"} gap={5}>
        <Flex>
            <Spacer />
            <ImageComponent image={javascriptslayt}/>
            <Spacer />
        </Flex>
        <Text>
            JavaScript, yaygın olarak web tarayıcılarında kullanılmakta olan dinamik bir programlama dilidir.
            JavaScript ile yazılan istemci tarafı betikler sayesinde tarayıcının kullanıcıyla etkileşimde bulunması,
            tarayıcının kontrol edilmesi, asenkron bir şekilde sunucu ile iletişime geçilmesi ve web sayfası içeriğinin değiştirilmesi gibi işlevler sağlanır.
            JavaScript, Node.js gibi platformlar sayesinde sunucu tarafında da yaygın olarak kullanılmaktadır.
        </Text>
        <Flex>
            <Spacer />
        <ImageComponent image={"https://venturebeat.com/wp-content/uploads/2018/01/javascript.jpg?w=1200&strip=all"}/>
            <Spacer />
        </Flex>
        <Text>
            İlk olarak Brendan Eich tarafından geliştirilmiş olup, ilk defa Aralık 1995 tarihinde Netscape Navigator 2.0 ile birlikte piyasaya sürüldü. Geliştirme aşamasında adı Mocha olarak geçmesine rağmen Eylül 1995 tarihine kadar resmi olarak LiveScript olarak isimlendiriliyordu. Netscape 2.0 Beta3 ile birlikte ismi JavaScript olarak değiştirildi.
        </Text>
        <Flex>
            <Spacer />
            <ImageComponent image={"https://s.yimg.com/uu/api/res/1.2/f.Me64DykWXNwx42st6XOA--~B/aD02NDA7dz05NjA7YXBwaWQ9eXRhY2h5b24-/https://o.aolcdn.com/hss/storage/midas/128057a4511d099aae1ba6eb9182f1ff/200105168/netscape_history_main_fullbleed_Eng10.jpg"}/>
            <Spacer />
        </Flex>
    </Flex>
);

export default Javascript;