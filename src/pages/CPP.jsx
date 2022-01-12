import React from 'react';
import {Flex, Spacer, Text} from "@chakra-ui/react";
import ImageComponent from "../components/ImageComponent";
import cppgif from "../assets/cppslayt.gif";

const Cpp = (props) => (
    <Flex flexDirection={"column"} mb={5} w={"2xl"} gap={5}>
        <Flex>
            <Spacer />
            <ImageComponent image={cppgif}/>
            <Spacer />
        </Flex>
        <Text>
            C++ (Türkçe okunuşu: ce artı artı, İngilizce okunuşu: si plas plas), Bell Laboratuvarlarından Bjarne Stroustrup tarafından 1979 yılından itibaren geliştirilmeye başlanmış, C'yi kapsayan ve çok paradigmalı, yaygın olarak kullanılan, genel amaçlı bir programlama dilidir. İlk olarak C With Classes (Sınıflarla C) olarak adlandırılmış, 1983 yılında ismi C++ olarak değiştirilmiştir.
        </Text>
        <Flex>
            <Spacer />
            <ImageComponent image={"https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/686669/cover-0325-LearnCandC__Languages_Dan_Newsletter-743100f051077054fa1cc613ff4523a2.png"}/>
            <Spacer />
        </Flex>
        <Text>
            Genel olarak her C programı aynı zamanda bir C++ programıdır, ancak her C++ programı bir C programı değildir. Bu durumun bazı istisnaları mevcuttur. C++'ı C'den ayıran özellikler C++'ın nesne paradigması kullanılarak programlamaya olanak tanıyan özelliklerdir. Sınıflar sayesinde yeni veri türleri yaratılabilir veya varolan türlerden yenileri türetilebilir. Ayrıca çokbiçimlilik sayesinde bir sınıf tanımıyla yazılmış kod, o sınıf türünden türetilmiş yeni sınıflarla da çalışabilir.
        </Text>
        <Flex>
            <Spacer />
            <ImageComponent image={"https://cdn.educba.com/academy/wp-content/uploads/2019/11/features-of-c.png"}/>
            <Spacer />
        </Flex>
    </Flex>
);

export default Cpp;