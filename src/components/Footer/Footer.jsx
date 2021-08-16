import React from 'react'
import { Link } from 'react-router-dom'
import Icon1 from "../../img/snsicon-01.png"
import Icon2 from "../../img/snsicon-02.png"
import Icon3 from "../../img/snsicon-03.png"
function Footer() {
    return (
        <footer className="footer">
                <div className="footer__detail">
                        <div className="footer__detail__left">
                            <div className="footer__items">
                                <h5>what happened</h5>
                                <div className="footer__items__list">
                                        <Link to=""><p>[공지] 개인 정보 처리 방침 변경 사전 안내</p></Link>
                                        <Link to=""><p>[공지] 29CM 강남 스토어 영업 종료</p></Link>
                                        <Link to=""><p>[공지] 개인 정보 처리 방침 변경 사전 안내</p></Link>
                                        <Link to=""><p>[공지] iOS 10 이하 버전 지원 중단 안내</p></Link>
                                        <Link to=""><p>[공지] 개인 정보 처리 방침 변경 사전 안내</p></Link>
                                       
                                </div>
                            </div>
                        </div>
                        <div className="footer__detail__right">
                        <div className="footer__items">
                                <h5>about us</h5>
                                <div className="footer__items__list">
                                        <Link to=""><p> 회사 소개</p></Link>
                                        <Link to=""><p>인재 채용</p></Link>
                                        <Link to=""><p>상시 할인 혜택</p></Link>            
                                </div>
                            </div>
                        <div className="footer__items">
                                <h5>my account</h5>
                                <div className="footer__items__list">
                                        <Link to=""><p>   회원 정보 수정</p></Link>
                                        <Link to=""><p>회원 등급</p></Link>
                                        <Link to=""><p>마일리지 현황</p></Link>
                                        <Link to=""><p>쿠폰</p></Link>
                                      
                                </div>
                            </div>
                        <div className="footer__items">
                                <h5>my order</h5>
                                <div className="footer__items__list">
                                        <Link to=""><p> 내 주문</p></Link>
                                        <Link to=""><p>주문 배송</p></Link>
                                        <Link to=""><p>취소 / 교환 / 반품 내역</p></Link>
                                        <Link to=""><p>상품 리뷰 내역</p></Link>
                                        <Link to=""><p>증빙 서류 발급</p></Link>

                                </div>
                            </div>
                        <div className="footer__items">
                                <h5>help</h5>
                                <div className="footer__items__list">
                                        <Link to=""><p> 1 : 1 상담 내역</p></Link>
                                        <Link to=""><p>상품 Q & A 내역</p></Link>
                                        <Link to=""><p>공지 사항</p></Link>
                                        <Link to=""><p>자주하는 질문</p></Link>
                                        <Link to=""><p>고객의 소리</p></Link>
                                    
                                </div>
                            </div>
                        </div>
                </div>
                <div className="footer__aboutUs">
                        <div className="footer__aboutUs__detail">
                            <p>© 2020-2021 what happened corp  l  (주) 왓헤픈 
                                ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr</p>
                                <p>서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</p>
                        </div>
                        <div className="footer__aboutUs__logo">
                            <Link to=""><img src={Icon1} alt="" /></Link>
                            <Link to=""><img src={Icon2} alt="" /></Link>
                            <Link to=""><img src={Icon3} alt="" /></Link>
                        </div>
                </div>
        </footer>
    )
}

export default Footer





