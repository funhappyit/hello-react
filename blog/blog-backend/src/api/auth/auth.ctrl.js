export const register = async ctx => {
  // Request Body 검증하기
    const schema = Joi.object().keys({
       usename: Joi.string()
           .alphanum()
           .min(3)
           .max(20)
           .required(),
        password: Joi.string().required(),
    });
    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }
    const {username, password} = ctx.request.body;
    try{
        // username이 이미 존재하는지 확인
        const exists = await User.findByUsername(username);
        if(exists){
            ctx.status = 409;
            return;
        }
        const user = new User({
            username,
        });
        await user.setPassword(password); //비밀번호 설정
        await user.save(); //데이터베이스에 저장

        //응답할 데이터에서 hashedPassword 필드 제거
        const data = user.toJSON();
        delete data.hashedPassword;
        ctx.body = data;
    }catch (e){
        ctx.throw(500,e);
    }
};

export const login = async ctx => {
    // 로그인
};

export const check = async ctx => {
    // 로그인 상태 확인
};

export const logout = async ctx => {
    // 로그아웃
};