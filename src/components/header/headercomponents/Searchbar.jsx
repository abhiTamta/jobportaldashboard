import { Form, Input } from 'antd'

const Searchbar = () => {
    return (
        <Form name='search'>
            <Form.Item className='m-0'>
                <Input.Search className='w-96'></Input.Search>
            </Form.Item>
        </Form>
    )
}

export default Searchbar