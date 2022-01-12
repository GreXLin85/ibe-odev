import React from 'react';
import {Flex, Spacer, Text} from "@chakra-ui/react";
import ImageComponent from "../components/ImageComponent";
import pythonslayt from "../assets/pythonslayt.gif";

const Python = (props) => (
    <Flex flexDirection={"column"} mb={5} w={"2xl"} gap={5}>
        <Flex>
            <Spacer />
            <ImageComponent image={pythonslayt}/>
            <Spacer />
        </Flex>
        <Text>
            Python, nesne yönelimli, yorumlamalı, birimsel (modüler) ve etkileşimli yüksek seviyeli bir programlama dilidir.

            Girintilere dayalı basit söz dizimi, dilin öğrenilmesini ve akılda kalmasını kolaylaştırır. Bu da ona söz diziminin ayrıntıları ile vakit yitirmeden programlama yapılmaya başlanabilen bir dil olma özelliği kazandırır.
        </Text>
        <Flex>
            <Spacer />
            <ImageComponent image={"https://www.aezion.com/wp-content/uploads/2020/06/Python_language.jpg"}/>
            <Spacer />
        </Flex>
        <Text>
            Geliştirilmeye 1990 yılında Guido van Rossum tarafından Amsterdam'da başlanmıştır. Adını sanılanın aksine bir yılandan değil Guido van Rossum’un çok sevdiği, Monty Python adlı altı kişilik bir İngiliz komedi grubunun Monty Python’s Flying Circus adlı gösterisinden almıştır. Günümüzde Python Yazılım Vakfı çevresinde toplanan gönüllülerin çabalarıyla sürdürülmektedir. Python 1.0 sürümüne Ocak 1994'te ulaşmıştır. 2.0 sürümü 16 Ekim 2000'de yayınlanmıştır. 3 Aralık 2008 tarihinden itibaren 3.x serisi yayınlanmaya başlamıştır; ancak 3.x serisi 2.x serisiyle uyumlu değildir.
        </Text>
        <Flex>
            <Spacer />
            <ImageComponent image={"https://www.freecodecamp.org/news/content/images/2021/08/chris-ried-ieic5Tq8YMk-unsplash.jpg"}/>
            <Spacer />
        </Flex>
    </Flex>
);

export default Python;