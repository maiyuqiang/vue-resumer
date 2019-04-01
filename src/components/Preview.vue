<template>
  <div id="preview">
    <div class="main">
      <el-button
        type="primary"
        size="mini"
        icon="el-icon-printer"
        class="print"
        v-print="'#printTest'"
      >打印</el-button>
      <el-button 
        type="success" 
        icon="el-icon-view" 
        class="preview" 
        size="mini"
        v-on:click="preview"
        >预览</el-button>
      <div id="printTest">
        <el-row class="topMain">
          <el-col :span="8" class="leftPart">
            <div class="grid-content bg-purple">
              <h1>RESUME</h1>
              <p>Name：{{resume.introForm.name}}</p>
              <p>Gender：{{resume.introForm.gender}}</p>
              <p>Education：{{resume.introForm.education}}</p>
              <p>BirthDate：{{resume.introForm.birthDate}}</p>
              <p>City：{{resume.introForm.city}}</p>
            </div>
          </el-col>
          <el-col :span="16" class="rightPart">
            <div class="grid-content bg-purple-light">
              <h2>Introduce</h2>
              <p>{{resume.introForm.introduce}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row class="bottomMain">
          <el-col :span="16" class="content">
            <div class="grid-content bg-purple">
              <el-row style="min-height:100px">
                <h2>Study Experience</h2>
                <section v-if="filter(resume.studyForm).length > 0">
                  <ul>
                    <li v-for="study in filter(resume.studyForm)" :key="study.school">
                      <p>{{study.duration[0]}} —— {{study.duration[1]}}</p>
                      <p>{{study.school}} | {{study.degree}}</p>
                    </li>
                  </ul>
                </section>
              </el-row>
              <el-row style="min-height:200px">
                <h2>Work Experience</h2>
                <section v-if="filter(resume.workExperience).length > 0">
                  <ul>
                    <li v-for="work in filter(resume.workExperience)" :key="work.company">
                      <p>{{work.company}}</p>
                      <p>{{work.timeInterval[0]}} —— {{work.timeInterval[1]}}</p>
                      <p class="last">{{work.mainContent}}</p>
                    </li>
                  </ul>
                </section>
              </el-row>
              <el-row style="min-height:542px">
                <h2>Project Experience</h2>
                <section v-if="filter(resume.experienceForm).length > 0">
                  <ul>
                    <li v-for="project in filter(resume.experienceForm)" :key="project.duty">
                      <p>{{project.projectName}}</p>
                      <p>{{project.duty}}</p>
                      <p>{{project.projectDescription}}</p>
                      <p>{{project.technicalRealization}}</p>
                    </li>
                  </ul>
                </section>
              </el-row>
            </div>
          </el-col>
          <el-col :span="8" class="relation">
            <div class="grid-content bg-purple-light">
              <el-row>
                <h2>Contact Information</h2>
                <ul>
                  <li>
                    <p>Phone：{{resume.waysForm.phone}}</p>
                    <p>QQ：{{resume.waysForm.qq}}</p>
                    <p>WeChat：{{resume.waysForm.wechat}}</p>
                    <p>Email：{{resume.waysForm.email}}</p>
                    <p>Adress：{{resume.waysForm.adress}}</p>
                  </li>
                </ul>
              </el-row>
              <el-row>
                <h2>Awards</h2>
                <section v-if="filter(resume.awardsForm).length > 0">
                  <ul>
                    <li v-for="award in filter(resume.awardsForm)" :key="award.awards">
                      <p class="awards">{{award.awards}}</p>
                    </li>
                  </ul>
                </section>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>

      <!-- <section v-if="filter(resume.experienceForm).length > 0">
        {{filter(resume.experienceForm)}}
        <h2>Project</h2>
        <ul>
          <li
            v-for="project in filter(resume.experienceForm)"
            :key="project"
          >{{project.experienceForm}}</li>
        </ul>
      </section>-->
    </div>
  </div>
</template>
<script>
export default {
  props: ["resume"],
  data() {
    return {};
  },
  methods: {
    filter(array) {
      console.log("filter", array.filter(item => this.isEmpty(item)));
      //找出非空对象
      return array.filter(item => this.isEmpty(item));
    },
    isEmpty(object) {
      //只要有一个 value 不是false，就返回false
      console.log("object", object);
      for (let key in object) {
        if (object[key]) {
          return true;
          break;
        }
      }
      return false;
    },
    preview() {
      this.$emit('preview')
    }
  }
};
</script>

<style lang="scss">
#preview {
  min-height: 100px;
  overflow-y: scroll;
  > .main {
    width: 220mm;
    margin: 0 auto;
    border: 1px solid #000;
    > .print {
      position: absolute;
      right: 100px;
      margin-top: 50px;
    }
    > .preview {
      position: absolute;
      right: 100px;
      margin-top: 10px;
    }
    > #printTest {
      > .topMain {
        width: 100%;
        height: 160px;
        .leftPart {
          // background: rgb(238, 222, 4);
          background: #cd3700;
          height: 160px;
          color: #fff;
          .bg-purple {
            width: 90%;
            height: 100%;
            overflow: hidden;
            h1 {
              line-height: 8px;
              text-indent: 2em;
              // color:#000;
            }
            p {
              padding-left: 2em;
              font-size: 14px;
              line-height: 20px;
              overflow: hidden;
              height: 20px;
            }
          }
        }
        .rightPart {
          height: 160px;
          border-bottom: 1px solid rgb(165, 158, 158);
          .bg-purple-light {
            width: 90%;
            height: 100%;
            margin: 0 auto;
            overflow: hidden;
            h2 {
              padding-top: 16px;
              color: rgb(248, 6, 6);
              line-height: 24px;
            }
            p {
              text-indent: 2em;
              line-height: 24px;
            }
          }
        }
      }
      > .bottomMain {
        width: 100%;
        height: 100%;
        position: relative;
        > .content {
          min-height: 234mm;
          > .bg-purple {
            padding-left: 13px;
            padding-right: 2px;
            > .el-row {
              margin: 10px 0;
              padding: 10px 0;
              box-shadow: 0 0 3px rgb(160, 160, 160);
              > h2 {
                text-indent: 1em;
                color: rgb(248, 6, 6);
              }
              ul {
                padding-left: 1em;
                li {
                  width: 96%;
                  margin-top: 5px;
                  padding-bottom: 10px;
                  // border-bottom: 1px solid rgb(192, 187, 187);
                  p {
                    line-height: 20px;
                    text-indent: 1em;
                  }
                  .last {
                    padding-left: 1em;
                  }
                }
              }
            }
          }
        }
        > .relation {
          height: 100%;
          position: absolute;
          right: 0;
          overflow: hidden;
          box-sizing: border-box;
          border: 10px solid #fff;
          > .bg-purple-light {
            height: 100%;
            width: 100%;
            border: 1px solid rgb(192, 187, 187);
            background: #cd3700;
            padding-left: 10px;
            //   background: rgb(238, 222, 4);
            > .el-row {
              width: 90%;
              margin: 24px auto;
              padding: 10px 0;
              color: #fff;
              ul {
                li {
                  margin: 16px 0;
                  p {
                    line-height: 20px;
                    text-indent: 2em;
                  }
                  .awards {
                    text-indent: 1em;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
@media print {
  #printTest {
    > .topMain {
      width: 100%;
      height: 160px;
      .leftPart {
        // background: rgb(238, 222, 4);
        background: #cd3700;
        height: 160px;
        color: #fff;
        .bg-purple {
          width: 90%;
          height: 100%;
          overflow: hidden;
          h1 {
            line-height: 8px;
            text-indent: 2em;
            // color:#000;
          }
          p {
            padding-left: 2em;
            font-size: 14px;
            line-height: 20px;
            overflow: hidden;
            height: 20px;
          }
        }
      }
      .rightPart {
        height: 160px;
        border-bottom: 1px solid rgb(165, 158, 158);
        .bg-purple-light {
          width: 90%;
          height: 100%;
          margin: 0 auto;
          overflow: hidden;
          h2 {
            padding-top: 16px;
            color: rgb(248, 6, 6);
            line-height: 24px;
          }
          p {
            text-indent: 2em;
            line-height: 24px;
          }
        }
      }
    }
    > .bottomMain {
      width: 100%;
      height: 100%;
      position: relative;
      > .content {
        min-height: 234mm;
        > .bg-purple {
          padding-left: 13px;
          padding-right: 2px;
          > .el-row {
            margin: 10px 0;
            padding: 10px 0;
            box-shadow: 0 0 3px rgb(160, 160, 160);
            > h2 {
              text-indent: 1em;
              color: rgb(248, 6, 6);
            }
            ul {
              padding-left: 1em;
              li {
                width: 96%;
                margin-top: 5px;
                padding-bottom: 10px;
                // border-bottom: 1px solid rgb(192, 187, 187);
                p {
                  line-height: 20px;
                  text-indent: 1em;
                }
                .last {
                  padding-left: 1em;
                }
              }
            }
          }
        }
      }
      > .relation {
        height: 100%;
        position: absolute;
        right: 0;
        overflow: hidden;
        box-sizing: border-box;
        border: 10px solid #fff;
        > .bg-purple-light {
          height: 100%;
          width: 100%;
          border: 1px solid rgb(192, 187, 187);
          background: #cd3700;
          padding-left: 10px;
          //   background: rgb(238, 222, 4);
          > .el-row {
            width: 90%;
            margin: 24px auto;
            padding: 10px 0;
            color: #fff;
            ul {
              li {
                margin: 16px 0;
                p {
                  line-height: 20px;
                  text-indent: 2em;
                }
                .awards {
                  text-indent: 1em;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

