import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String)
  login(@Args('username') username: string, @Args('password') password: string) {
    // Simplified: validate username/password logic here
    const user = { username, userId: '1' }; // Static user for simplicity
    return this.authService.login(user).accessToken;
  }
}
