// Behavioral design pattern
abstract class Middleware {
  protected next: Middleware | null = null;

  linkWith(next: Middleware): Middleware {
    this.next = next;
    return next;
  }

  handle(request: any): boolean {
    if (this.next) {
      return this.next.handle(request);
    }
    return true;
  }
}

// Concrete Middlewares
class AuthMiddleware extends Middleware {
  handle(request: any): boolean {
    if (!request.user) {
      console.log('Authentication failed.');
      return false;
    }
    return super.handle(request);
  }
}

class RoleMiddleware extends Middleware {
  handle(request: any): boolean {
    if (request.user.role !== 'admin') {
      console.log('Access denied. Admins only.');
      return false;
    }
    return super.handle(request);
  }
}

class InputValidationMiddleware extends Middleware {
  handle(request: any): boolean {
    if (!request.body.name) {
      console.log('Invalid input: name is required.');
      return false;
    }
    return super.handle(request);
  }
}

// Chain setup
const auth = new AuthMiddleware();
const role = new RoleMiddleware();
const validation = new InputValidationMiddleware();

auth.linkWith(role).linkWith(validation);

// Request example
const request = {
  user: { name: 'Alice', role: 'admin' },
  body: { name: 'Product A' }
};

const result = auth.handle(request);
console.log(result ? 'Request processed ✅' : 'Request rejected ❌');