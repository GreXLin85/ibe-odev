import React from 'react';
import {Button, FormControl, FormLabel, Input, Text, Textarea} from "@chakra-ui/react";

const Iletisim = (props) => (
    <FormControl width={`xl`}>
            <Text>
                    İletişim Adreslerimiz<br/>
                    Telefon : 0533 884 1320<br/>
                    E-Posta : grexlin85@gmail.com (Erol Umut Atalay)<br/>
            </Text>

        <FormLabel htmlFor='isim' placeholder={"İsminiz ve Soyisminiz"}>İsim Soyisim</FormLabel>
        <Input id='isim' type='text' />
        <FormLabel htmlFor='email'>E-postanız</FormLabel>
        <Input id='email' type='email' placeholder={"E-Postanız"}/>
        <FormLabel htmlFor='mesaj'>Mesajınız</FormLabel>
        <Textarea id={"mesaj"} placeholder='Mesajınız' />
        <Button type='submit'  w={`xl`} variantColor='teal' mt={4}>Gönder</Button>
    </FormControl>
);

export default Iletisim;