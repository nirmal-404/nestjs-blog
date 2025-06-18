'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { signIn } from '@/lib/auth-client'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

//schema ->
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address!'),
  password: z.string().min(6, 'Password must be at least 6 characters long')
})

type LoginFormvalues = z.infer<typeof loginSchema>

function LoginForm () {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  //initilaze form
  const form = useForm<LoginFormvalues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onLoginSubmit = async (values: LoginFormvalues) => {
    setIsLoading(true)

    try {
      const { error } = await signIn.email({
        email: values.email,
        password: values.password,
        rememberMe: true
      })

      if (error) {
        toast('Login Failed!')
        return
      }
console.log(values)
      toast('Login Success')
      router.push('/')
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onLoginSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Enter your email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type='password'
                  placeholder='Enter your Password'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full' disabled={isLoading}>
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>
    </Form>
  )
}


export default LoginForm;