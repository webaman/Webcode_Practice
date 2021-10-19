const getError = (errors, prop) => {
    try {
        return errors.mapped()[prop].msg
    } catch (error) {
        return ''
    }
    }
    
    module.exports = ({errors}) => {
    return `
    <!doctype html>
<html lang="en">
  <head>
  <style>
  p{
      color:red
        
    
  }
  </style>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
      
      
   <section class="content">
      <div class="container-fluid">
       
        <div class="row mt-4">
          <div class="mx-auto card" style="width: 35rem; ">
            <div class="card-header">
              <h3 class="card-title">Signup Form</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form class="form-horizontal" method="post">
              <div class="card-body">
                  <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-3 col-form-label">Name</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputEmail3" name="fn" placeholder="Name">
                  </div>
                  <p class="help is-danger">${getError(errors, 'fn')}</p>
                </div>
                <div class="form-group row mt-4">
                  <label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputEmail3" name="email" placeholder="Email">
                  </div>
                  
                  <p class="help is-danger">${getError(errors, 'email')}</p>
                </div>
                <div class="form-group row mt-4">
                  <label for="inputPassword3" class="col-sm-3 col-form-label">Password</label>
                  <div class="col-sm-6">
                    <input type="password" class="form-control" id="inputPassword3" name="password" placeholder="Password">
                  </div>
                  <p class="help is-danger">${getError(errors, 'password')}</p>
                </div>
                <div class="form-group row mt-4">
                  <div class="offset-sm-2 col-sm-10">
                    
                  </div>
                
              </div>
              <!-- /.card-body -->
              
              <div class="card-footer ">
                <p class="text-center">
                <input type="submit" class="btn btn-primary" value="Submit">
              </p>
              </div>
            
              <!-- /.card-footer -->
            
            
            </form>
            
          </div>
          
          <!-- /.card -->
        </div>
        
        </div>
        
    </div>
        
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
  </body>
</html>    

    `
    }
    


   

    


    