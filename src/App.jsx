import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Heading, Flex, Spacer, Button, Text
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Routes, Route, Link } from "react-router-dom";
import ImageComponent from "./components/ImageComponent";
import Iletisim from "./pages/Iletisim";
import Javascript from "./pages/Javascript";
import Rust from "./pages/Rust";
import Python from "./pages/Python";
import CPP from "./pages/CPP";
import CSHARP from "./pages/CSHARP";

function App() {
  let pages = {
    "Anasayfa" : {
      "title" : "Anasayfa",
      "image": "https://www.goodcore.co.uk/blog/wp-content/webp-express/webp-images/uploads/2019/08/coding-vs-programming-2.jpg.webp",
      "content" : "Burası anasayfa diğer sayfalara gitmek için resmin altındaki menüyü kullanın."
    },
    "Iletisim" : {
      "title" : "İletişim",
      "image": "https://www.brandingturkiye.com/wp-content/uploads/2018/06/iletisim-nedir-iletisimin-neden-onemlidir-iletisim-turleri-nelerdir.jpg",
      "content" : <Iletisim />
    },
    "Javascript": {
      "title" : "Javascript",
      "image": "https://jsguru.org/images/javascript/feature.jpg",
      "content" : <Javascript />
    },
    "Rust": {
      "title" : "Rust",
      "image": "https://www.rust-lang.org/logos/rust-logo-512x512.png",
      "content" : <Rust />
    },
    "Python": {
      "title" : "Python",
      "image": "https://www.python.org/static/opengraph-icon-200x200.png",
      "content" : <Python />
    },
    "C++": {
      "title" : "C++",
      "image": "http://cppcat.com/wp-content/uploads/2021/04/1522635669452_11.jpg",
      "content" : <CPP />
    },
    "C#": {
      "title" : "C#",
      "image": "https://stackify.com/wp-content/uploads/2020/09/What-is-C-used-for.png",
      "content" : <CSHARP />
    },

    }

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" justifyContent={"center"}>
        <Flex flexDirection={"column"} justifyContent={"center"}>
          <Flex w={"full"} justify={"stretch"}>
            <Spacer />
            <Heading as='h2' size='xl' isTruncated>
              Programlama Dilleri
            </Heading>
            <Spacer />
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
          <Flex w={"full"} mt={5} justify={"stretch"}>
            <Spacer />
            <Routes>
              <Route path="/" element={<ImageComponent image={pages["Anasayfa"]["image"]} />} />
              <Route path="/iletisim" element={<ImageComponent image={pages["Iletisim"]["image"]} />} />
              <Route path="/javascript" element={<ImageComponent image={pages["Javascript"]["image"]} />} />
              <Route path="/rust" element={<ImageComponent image={pages["Rust"]["image"]} />} />
              <Route path="/python" element={<ImageComponent image={pages["Python"]["image"]} />} />
              <Route path="/cpp" element={<ImageComponent image={pages["C++"]["image"]} />} />
              <Route path="/csharp" element={<ImageComponent image={pages["C#"]["image"]} />} />
            </Routes>
            <Spacer />
          </Flex>
          <Flex w={"full"} justify={"stretch"} mt={5} gap={2}>
            <Spacer />
            <Button as={Link} to="/">Anasayfa</Button>
            <Button as={Link} to="/iletisim">İletişim</Button>
            <Button as={Link} to="/javascript">Javascript</Button>
            <Button as={Link} to="/rust">Rust</Button>
            <Button as={Link} to="/python">Python</Button>
            <Button as={Link} to="/cpp">C++</Button>
            <Button as={Link} to="/csharp">C#</Button>
            <Spacer />
          </Flex>
          <Flex w={"full"} justify={"stretch"} mt={5}>
            <Spacer />
            <Routes>
              <Route path="/" element={<Heading>{pages["Anasayfa"]["title"]}</Heading>} />
              <Route path="/iletisim" element={<Heading>{pages["Iletisim"]["title"]}</Heading>} />
              <Route path="/javascript" element={<Heading>{pages["Javascript"]["title"]}</Heading>} />
              <Route path="/rust" element={<Heading>{pages["Rust"]["title"]}</Heading>} />
              <Route path="/python" element={<Heading>{pages["Python"]["title"]}</Heading>} />
              <Route path="/cpp" element={<Heading>{pages["C++"]["title"]}</Heading>} />
              <Route path="/csharp" element={<Heading>{pages["C#"]["title"]}</Heading>} />
            </Routes>
            <Spacer />
          </Flex>
          <Flex w={"full"} justify={"stretch"} justifyContent={"center"} mt={5}>
            <Spacer />
            <Routes>
              <Route path="/" element={<Text>{pages["Anasayfa"]["content"]}</Text>} />
              <Route path="/iletisim" element={pages["Iletisim"]["content"]} />
              <Route path="/javascript" element={pages["Javascript"]["content"]} />
              <Route path="/rust" element={pages["Rust"]["content"]} />
              <Route path="/python" element={pages["Python"]["content"]} />
              <Route path="/cpp" element={pages["C++"]["content"]} />
              <Route path="/csharp" element={pages["C#"]["content"]} />
            </Routes>
            <Spacer />
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
