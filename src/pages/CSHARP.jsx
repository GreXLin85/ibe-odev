import React from 'react';
import {Flex, Spacer, Text} from "@chakra-ui/react";
import ImageComponent from "../components/ImageComponent";
import csharpslayt from "../assets/csharpslayt.gif";

const Csharp = (props) => (
    <Flex flexDirection={"column"} mb={5} w={"2xl"} gap={5}>
        <Flex>
            <Spacer />
            <ImageComponent image={csharpslayt}/>
            <Spacer />
        </Flex>
        <Text>
            C#; Microsoft tarafından .NET Teknolojisi için geliştirilen modern bir programlama dilidir. Sözdizimi C-like (C benzeri) bir deneyim sunar.

            Microsoft tarafından geliştirilmiş olsa da ECMA ve ISO standartları altına alınmıştır.
        </Text>
        <Flex>
            <Spacer />
            <ImageComponent image={"https://developers.redhat.com/sites/default/files/styles/share/public/blog/2021/04/2021_C9_Methods_Featured_article_image_A-01.png?itok=uNci5Wbc"}/>
            <Spacer />
        </Flex>
        <Text>
            Bu dilin tasarlanmasına Pascal, Delphi derleyicileri ve J++ programlama dilinin tasarımlarıyla bilinen Anders Hejlsberg liderlik etmiştir.

            Birçok alanda Java'yı kendisine örnek alır ve C# da java gibi C ve C++ kod sözdizimine benzer bir kod yapısındadır. .NET kütüphanelerini kullanmak amacıyla yazılan programların çalıştığı bilgisayarlarda uyumlu bir kütüphanenin ve yorumlayıcının bulunması gereklidir. Bu, Microsoft'un .NET Framework'u olabileceği gibi ECMA standartlarına uygun herhangi bir kütüphane ve yorumlayıcı da olabilir. Yaygın diğer kütüphanelere örnek olarak Portable.Net ve Mono verilebilir.
        </Text>
        <Flex>
            <Spacer />
            <ImageComponent image={"http://computerjee.com/wp-content/uploads/2020/05/C.jpg"}/>
            <Spacer />
        </Flex>
    </Flex>
);

export default Csharp;