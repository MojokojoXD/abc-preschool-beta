import
  {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface FormFeedbackProps
{
  msg: string;

  isSuccessful: boolean;

  open: boolean;

  onDialogChange: ( open: boolean ) => void;
}
  

export function FormFeedback({ msg, isSuccessful, open, onDialogChange }: FormFeedbackProps)
{
  return (
    < AlertDialog onOpenChange={onDialogChange} open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-4xl'>{ isSuccessful ? 'Thank You!' : 'Oops' }</AlertDialogTitle>
          <AlertDialogDescription className='text-xl'>
            {msg}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className='bg-zinc-800 hover:bg-zinc-800/90'>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog >
  )
}