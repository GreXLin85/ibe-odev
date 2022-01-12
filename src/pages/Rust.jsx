import React from 'react';
import {Flex, Spacer, Text} from "@chakra-ui/react";
import ImageComponent from "../components/ImageComponent";
import rustslayt from "../assets/rustslayt.gif";

const Rust = (props) => (
    <Flex flexDirection={"column"} mb={5} w={"2xl"} gap={5}>
        <Flex>
            <Spacer />
            <ImageComponent image={rustslayt}/>
            <Spacer />
        </Flex>
        <Text>
            Rust; açık kaynak kodlu, çoklu paradigmalı, ilk olarak Mozilla tarafından dizayn edilen ve Rust Foundation tarafından geliştirilmekte olan; performansa, güvenliğe ve eş zamanlı işlem yapabilmeye odaklanmış bir sistem programlama dilidir. Rust, söz dizimi olarak C++ diline benzemektedir. Rust, "güvenli, pratik ve hızlı" bir dil ortaya koymak amacı ile tasarlanmıştır.
        </Text>
        <Flex>
            <Spacer />
            <ImageComponent image={"https://hackaday.com/wp-content/uploads/2015/12/rust.jpg?w=640"}/>
            <Spacer />
        </Flex>
        <Text>
            Rust, yüksek derecede güvenli eşzamanlı sistemler geliştirmeye odaklanmış bir yazılım dilidir. Temel amaç sistem korunurluluğunu ve sürdürülebilirliğini sağlarken hız ve verimden ödünç vermemektir. Sistem korunurluluğu, diğer dillerde örneğine az rastlanan bir bellek kontrol sistemi ile sağlanmaktadır.
        </Text>
        <Flex>
            <Spacer />
            <ImageComponent image={"http://networkstatic.net/wp-content/uploads/2020/01/rustacean-banner.png"}/>
            <Spacer />
        </Flex>
    </Flex>
);

export default Rust;