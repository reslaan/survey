<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\AuthRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(AuthRequest $request){

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password) ,
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token,
        ]);
    }

    public function login(Request $request){

        $credentials = $request->validate([
            'email' => ['required','email','string','exists:users,email'],
            'password' => ['required'],
            'remember' => ['boolean'],
        ]);

        $remember = $credentials['remember'] ?? false;
        unset( $credentials['remember']);

        if(!Auth::attempt($credentials, $remember)){
                return response([
                    'message' => 'Provide credentials not correct'
                ], 422);
        }


        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;


        return response([
            'user' => $user,
            'token' => $token,
        ]);

    }

    public function logout(){
        $user = Auth::user();
    // Revoke a specific token...
        $user->tokens()->where('id', auth()->id())->delete();
      return response([
            'success' => true
        ]);
    }
}