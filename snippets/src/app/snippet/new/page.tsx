import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const CreateSnippetAPage = () => {
  return (
    <form>
      <div>
        <Label>Tittle</Label>
        <Input type = "text" name = "title" id = "title"></Input>
      </div>
      <div>
        <Label>Code</Label>
        <Textarea  name = "title" id="title"></Textarea>
      </div>
      <Button type ="submit" className='my-4'>New</Button>
    </form>
  )
}

export default CreateSnippetAPage
