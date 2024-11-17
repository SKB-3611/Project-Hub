"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MessageCircleMore } from 'lucide-react'
import { useState } from "react"
import { sendEmail } from "./action"
export default function ContactUs() {
    const [data, setdata] = useState({name:"",email:"",subject:"",message:""})
    const [isSending, setIsSending] = useState(false)
    const handleChange = (e) => {
        setdata({...data,[e.target.id]:e.target.value})
    }
    const handleSubmit = async() => {
        setIsSending(true)
        let a =await sendEmail(data)
        a ? setIsSending(false):alert("Something went wrong")
        setdata({name:"",email:"",subject:"",message:""})
    }
  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="md:sticky md:top-8">
          <CardHeader>
            <CardTitle className="text-2xl mb-2">Contact Information</CardTitle>
            <CardDescription>We're here to help and answer any question you might have.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-10 ">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:projecthubbusiness@gmail.com" target="_blank" className="text-sm text-muted-foreground">projecthubbusiness@ gmail.com</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <div className="flex flex-wrap">
                <a href="tel:+917775858902" target="_blank" className="text-sm text-muted-foreground">+91 7775858902</a>
                <span className="mx-2">/</span>
                <a href="tel:+917888124630" target="_blank" className="text-sm text-muted-foreground block sm:inline-block">+91 7888124630</a>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
              <MessageCircleMore className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">WhatsApp</p>
                <div className="flex flex-wrap">
                    
                <a href="https://wa.me/917775858902" target="_blank" className="text-sm text-muted-foreground">+91 7775858902 </a>
                <span className="mx-2">/</span>
    
                <a href="https://wa.me/917888124630" target="_blank" className="text-sm text-muted-foreground">+91 7888124630</a>
                </div>
              </div>
            </div>
          
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl mb-2">Send us a message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4 ">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5 ">
                  <Label htmlFor="name">Name</Label>
                  <Input value={data.name} id="name" placeholder="John Doe" className="text-sm" onChange={(e)=>handleChange(e)} />
                </div>
                <div className="flex flex-col space-y-1.5 ">
                  <Label htmlFor="email">Email</Label>
                  <Input value={data.email} id="email" placeholder="john@example.com" type="email"className="text-sm" onChange={(e)=>handleChange(e)} />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input value={data.subject} id="subject" placeholder="How can we help you?" className="text-sm" onChange={(e)=>handleChange(e)} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea value={data.message} id="message" placeholder="Your message" className="min-h-[150px] text-sm" onChange={(e)=>handleChange(e)}  />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full" disabled ={data.name.length==0 || data.email.length==0 || data.subject.length==0 || data.message.length==0|| isSending} onClick={handleSubmit}>{isSending ? "Sending..." : "Submit"}</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}